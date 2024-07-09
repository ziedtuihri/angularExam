import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent implements OnInit{

  voyageForm: FormGroup = this.formBuilder.group({

  })

  ngOnInit(): void {
    this.voyageForm =
  }

  constructor(
    private formBuilder: FormBuilder
  ){}

}
