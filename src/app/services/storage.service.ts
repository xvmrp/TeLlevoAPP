import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar un item en el almacenamiento
  async setItem(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  // Obtener un item del almacenamiento
  async getItem(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Eliminar un item del almacenamiento
  async removeItem(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Actualizar un usuario en la lista de usuarios (por ejemplo, cuando se cambia la imagen de perfil)
  async updateUser(updatedUser: any): Promise<void> {
    let usuarios = await this.getItem('usuarios') || [];

    // Buscar el índice del usuario en la lista
    const index = usuarios.findIndex((user: any) => user.username === updatedUser.username);

    if (index !== -1) {
      // Actualizar el usuario en la lista
      usuarios[index] = updatedUser;

      // Guardar la lista actualizada
      await this.setItem('usuarios', usuarios);
    }
  }

  // Obtener la lista completa de usuarios
  async getUsers(): Promise<any[]> {
    return await this.getItem('usuarios') || [];
  }

  // Guardar el usuario actual (quien está logueado)
  async setCurrentUser(user: any): Promise<void> {
    await this.setItem('usuario_actual', user);
  }

  // Obtener el usuario actual (quien está logueado)
  async getCurrentUser(): Promise<any> {
    return await this.getItem('usuario_actual');
  }

  // Limpiar el almacenamiento completo
  async clear(): Promise<void> {
    await this._storage?.clear();
  }
}
