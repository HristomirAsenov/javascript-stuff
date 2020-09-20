import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CauseService } from '../../../services/cause.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cause',
  templateUrl: './create-cause.component.html',
  styleUrls: ['./create-cause.component.css']
})
export class CreateCauseComponent implements OnInit {

  registerForm: FormGroup;

  constructor(fb: FormBuilder, private causeService: CauseService, private route: Router) {
    this.registerForm = fb.group({
      causeName: ['', [Validators.required, Validators.minLength(5)]],
      neededAmount: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^http[s]?:\/\/.+\.[a-z]+$/g)]]
    });
  }

  get causeNameErrors() {
    return this.registerForm.get('causeName');
  }

  get neededAmountErrors() {
    return this.registerForm.get('neededAmount');
  }

  get descriptionErrors() {
    return this.registerForm.get('description');
  }

  get imageUrlErrors() {
    return this.registerForm.get('imageUrl');
  }

  onCreateCauseHandler() {

    const form = this.registerForm.value;

    const cause = {
      cause: form.causeName,
      neededAmount: Number(form.neededAmount),
      description: form.description,
      imageUrl: form.imageUrl
    };

    console.log(cause);

    this.causeService.createCause(cause).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/']);
    })
  }

  ngOnInit() {
  }

}
