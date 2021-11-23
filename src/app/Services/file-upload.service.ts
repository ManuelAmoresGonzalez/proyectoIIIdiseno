import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  async pushFileToStorage(fileUpload: any) {
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);
    uploadTask.snapshotChanges()
    return (await uploadTask).ref.getDownloadURL()
    // .pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(downloadURL => {
          // fileUpload.url = downloadURL;
          // fileUpload.name = fileUpload.file.name;
          // this.saveFileData(fileUpload);
        // });
      // })
    // ).subscribe();

    // return uploadTask.percentageChanges();
  }

  // private saveFileData(fileUpload: any): void {
  //   this.db.list(this.basePath).push(fileUpload);
  // }


}