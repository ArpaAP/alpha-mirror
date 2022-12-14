#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Manager, Menu, MenuItem, Submenu};

// Create the command:
// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    // Show main window
    window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
fn my_custom_command() -> String {
    "Hello from Rust!".into()
}

fn main() {
    let toggle_keyboard = CustomMenuItem::new(
        "toggle_software_keyboard".to_string(),
        "Toggle Software Keyboard",
    )
    .accelerator("Command+K");
    let toggle_fullscreen =
        CustomMenuItem::new("toggle_fullscreen".to_string(), "Toggle Fullscreen")
            .accelerator("Command+Alt+F");
    let toggle_controlbar =
        CustomMenuItem::new("toggle_controlbar".to_string(), "Toggle Controlbar")
            .accelerator("Command+N");
    let toggle_bottom_menu =
        CustomMenuItem::new("toggle_bottom_menu".to_string(), "Toggle Bottom Menu")
            .accelerator("Command+Alt+M");

    let debug_menu = Submenu::new(
        "Debug",
        Menu::new()
            .add_item(toggle_keyboard)
            .add_item(toggle_fullscreen)
            .add_item(toggle_controlbar)
            .add_item(toggle_bottom_menu),
    );
    let menu = Menu::os_default("Alpha Mirror")
        .add_native_item(MenuItem::EnterFullScreen)
        .add_submenu(debug_menu);

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            my_custom_command
        ])
        .menu(menu)
        .on_menu_event(|event| match event.menu_item_id() {
            "toggle_software_keyboard" => {
                event
                    .window()
                    .app_handle()
                    .emit_all("toggle_software_keyboard", ())
                    .expect("error on emitting software keyboard toggle event");
            }
            "toggle_fullscreen" => {
                let is_fullscreen = event
                    .window()
                    .is_fullscreen()
                    .expect("error on getting is fullscreen");
                event
                    .window()
                    .set_fullscreen(!is_fullscreen)
                    .expect("error on toggle fullscreen");
            }
            "toggle_controlbar" => {
                event
                    .window()
                    .app_handle()
                    .emit_all("toggle_controlbar", ())
                    .expect("error on emitting navbar toggle event");
            }
            "toggle_bottom_menu" => {
                event
                    .window()
                    .app_handle()
                    .emit_all("toggle_bottom_menu", ())
                    .expect("error on emitting bottom menu toggle event");
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
