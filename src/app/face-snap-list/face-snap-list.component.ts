import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  
  
  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
}
  

}
