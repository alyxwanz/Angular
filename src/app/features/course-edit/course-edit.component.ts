import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
  courseEditForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.courseEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      newAuthor: ['', [Validators.required, this.validateAuthor]],
      duration: ['', [Validators.required, Validators.min(0)]],
      authors: new FormArray([]),
    });
  }

  createAuthor(): void {
    const author = this.f.newAuthor.value;
    (this.f.authors as FormArray).push(new FormControl(author));
    this.f.newAuthor.reset('');
  }

  deleteAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  get f() {
    return this.courseEditForm.controls;
  }

  get authors(): FormArray {
    return this.f.authors as FormArray;
  }

  private validateAuthor(control: AbstractControl) {
    const authorPattern = /^([a-zA-Z0-9]+)$/;
    if (control.value && control.value.match(authorPattern)) {
      return null;
    } else {
      return {
        invalidAuthorName:
          'Author name should contain only latin letters and numbers',
      };
    }
  }

  onFormSubmit() {
    console.log();
  }
}
