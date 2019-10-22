import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { DataType } from './data-type.model';
import { FirestoreCollection } from './firestore-collection.enum';

const DELETE_FLAG = 'deleteFlag';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(
    protected db: AngularFirestore,
    protected collectionName: FirestoreCollection
  ) {
    this.dataCollection = db.collection<T>(collectionName, ref =>
      ref.where(DELETE_FLAG, '==', false)
    );
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }
}
