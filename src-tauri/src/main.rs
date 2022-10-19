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
    .accelerator("Ctrl+K");
    let debug_menu = Submenu::new("Debug", Menu::new().add_item(toggle_keyboard));
    let menu = Menu::os_default("Alpha Mirror")
        .add_native_item(MenuItem::EnterFullScreen)
        .add_submenu(debug_menu);

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            my_custom_command
        ])
        .menu(menu)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
