import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../enum/strings.enum';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,CoursesComponent,NgClass,NgStyle],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  
  model = signal<any>({});
  cover = signal<string | null>(null);
  cover_file = signal<any>(null);
  showError = signal<boolean>(false);
  isSaved = signal<boolean>(false);
  courses: any[] = []; // Declare the courses property

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      // this.cover_file = file;
      this.cover_file.set(file);
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        // this.cover = dataUrl;
        this.cover.set(dataUrl);
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
      // this.showError = false;
      this.showError.set(false);
    }
  }
  
  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form invalid');
      form.control.markAllAsTouched();
      if (!this.cover) {
        // this.showError = true;
        this.showError.set(true);
      }
      return;
    }

    console.log(form.value);

    this.saveCourse(form);
  }

  saveCourse(formValue:any){
   console.log(formValue)
   
   const data={
    ...formValue,

   }

   localStorage.setItem(Strings.STORAGE_KEY,JSON.stringify(data))
   this.courses=[...this.courses,data]
  }



}
