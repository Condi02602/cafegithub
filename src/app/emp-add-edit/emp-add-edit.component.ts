import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';
import { DatePipe } from '@angular/common';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  empForm! : FormGroup

  public education = ["Matric", "Graduate", "Post-Graduate",];

  public status=[
    'Active',
    'Inactive'
  ];

  constructor(private fb: FormBuilder, private empService:EmployeeService ,private dialogRef: MatDialogRef<EmpAddEditComponent>, private datePipe: DatePipe, @Inject(MAT_DIALOG_DATA) public data: any, private coreService: CoreService)
  {
    this.empForm = this.fb.group({
      id:[''],
      chefName: ['',Validators.required],
      waiterName: ['',Validators.required],
      managerName:['',Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      education:['',Validators.required],
      status:['',Validators.required],
      experience:['',Validators.required],
      salary:['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {

      if(this.data){
        const formattedDate = this.datePipe.transform(this.empForm.value.dob, 'dd/MM/yyyy');

      // Update the form value with the formatted date
      this.empForm.patchValue({ dob: formattedDate });

      this.empService.editEmployee(this.data.id, this.empForm.value).subscribe({
        next: (val: any) => {
          this.coreService.openSnackBar('Employee Deleted','done')
          console.log(val);
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
      }
      else{
        const formattedDate = this.datePipe.transform(this.empForm.value.dob, 'dd/MM/yyyy');

      // Update the form value with the formatted date
      this.empForm.patchValue({ dob: formattedDate });

      this.empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          this.coreService.openSnackBar('Employee Added','done')
          console.log(val);
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
      }
      // Format the date using DatePipe
      
    }
  }
}
