#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

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
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            my_custom_command
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
