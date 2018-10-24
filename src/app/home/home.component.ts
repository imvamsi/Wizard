import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Formgroups  from validation process
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public ThirdFormGroup: FormGroup;
  public forthFormGroup: FormGroup;

  public fileList: FileList;
  public files = [];
  public formData = {
    'name': '',
    'address': '',
    'email': '',
    'phone': '',
    'options': '',
    'term': '',
  }

  // Form Submition Flag for display validation
  public firstSubmited = false;
  public secondSubmited = false;
  public thiredSubmited = false;
  public forthSubmited = false;

  constructor(private fb: FormBuilder) {
    // Step 1 Validation Configuration
    this.firstFormGroup = this.fb.group({
      files: ['', Validators.required]
    });

    // Step 2 Validation Configuration
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });

    // Step 3 Validation Configuration
    const pattern = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,5})$');
    this.ThirdFormGroup = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(pattern)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])],
    });

    // Step 4 Validation Configuration
    this.forthFormGroup = this.fb.group({
      'term': ['', Validators.required],
    })
  }
  ngOnInit() {
  }

  upload() {
    console.log("Click");
    document.getElementById('upload').click();
    return false;
  }

  /*
   * Function is call when user click on next buttion and set approproate form as submited
   */
  next(no) {
    if (no == 1) {
      this.firstSubmited = true;
    } else if (no == 2) {
      this.secondSubmited = true;
    } else if (no == 3) {
      this.thiredSubmited = true;
    } else if (no == 4) {
      this.forthSubmited = true;
    }
  }
  /*
  *  Function is call when form is submited
  */
  submit(flag) {
    this.forthSubmited = true;
    if (flag && this.formData['term']) {
      alert("success");
    }
  }

  /*
   *  Get Files Object when user upload Files. 
   */
  fileUpload(e) {
    this.files = [];
    this.fileList = e.target.files;
    console.log("this.file:", this.fileList);
    for (const key in this.fileList) {
      let json = {
        name: new Date().getTime() + "_" + this.fileList[key]['name'],
        date: new Date(),
      }
      this.files.push(json);
    }
    this.files.splice(this.files.length - 2, 2);
  }
}
