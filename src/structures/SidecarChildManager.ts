import { Child, Command } from '@tauri-apps/api/shell'

export interface SidecarChildManagerData {
  joystick: {
    isSwitchPressed: boolean
    vrx: number
    vry: number
  } | null
  direction: 'fl' | 'bl' | 'l' | 'f' | 'b' | null | 'fr' | 'br' | 'r'
}

export class SidecarChildManager {
  public command!: Command
  public child!: Child
  public data: SidecarChildManagerData = { joystick: null, direction: null }

  async load() {
    console.log('loading')

    const command = Command.sidecar('bin/main')

    command.on('close', (data) => {
      console.log(`command finished with code ${data.code} and signal ${data.signal}`)
    })
    command.on('error', (error) => console.error(`command error: "${error}"`))

    command.stdout.on('data', (line) => {
      const data = JSON.parse(line) as SidecarChildManagerData['joystick']
      this.data.joystick = data

      let direction = null

      if (data!.vrx < 0.25 && data!.vry < 0.25) {
        direction = 'fl'
      } else if (data!.vrx < 0.25 && data!.vry > 0.75) {
        direction = 'bl'
      } else if (data!.vrx < 0.25 && data!.vry > 0.25 && data!.vry < 0.75) {
        direction = 'l'
      } else if (data!.vrx > 0.25 && data!.vrx < 0.75 && data!.vry < 0.25) {
        direction = 'f'
      } else if (data!.vrx > 0.25 && data!.vrx < 0.75 && data!.vry > 0.75) {
        direction = 'b'
      } else if (data!.vrx > 0.25 && data!.vrx < 0.75 && data!.vry > 0.25 && data!.vry < 0.75) {
        direction = null
      } else if (data!.vrx > 0.75 && data!.vry < 0.25) {
        direction = 'fr'
      } else if (data!.vrx > 0.75 && data!.vry > 0.75) {
        direction = 'br'
      } else if (data!.vrx > 0.75 && data!.vry > 0.25 && data!.vry < 0.75) {
        direction = 'r'
      }

      console.log(direction)
      this.data.direction = direction as any
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
