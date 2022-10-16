import { Child, Command } from '@tauri-apps/api/shell'

export interface SidecarChildManagerData {
  joystick: {
    isSwitchPressed: boolean
    vrx: number
    vry: number
  } | null
}

export class SidecarChildManager {
  public command!: Command
  public child!: Child
  public data: SidecarChildManagerData = { joystick: null }

  async load() {
    console.log('loading')

    const command = Command.sidecar('bin/main')

    command.on('close', (data) => {
      console.log(`command finished with code ${data.code} and signal ${data.signal}`)
    })
    command.on('error', (error) => console.error(`command error: "${error}"`))

    command.stdout.on('data', (line) => {
      this.data = JSON.parse(line)
    })
    command.stderr.on('data', (line) => console.log(`command stderr: "${line}"`))

    const child = await command.spawn()

    console.log('child spawned')

    this.command = command
    this.child = child
  }

  async kill() {
    await this.child.kill()
  }

  async reload() {
    await this.kill()
    await this.load()
  }
}
