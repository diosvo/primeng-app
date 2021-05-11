import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-story-book',
  templateUrl: './story-book.component.html',
  styleUrls: ['./story-book.component.scss'],
})
export class StoryBookComponent {
  form: FormGroup;
  result = [];

  constructor(private fb: FormBuilder, private service: BudgetService) {
    this.form = this.fb.group({
      indexname: [null],
      keyword: [null]
    });
  }

  onSubmit() {
    const queries = JSON.stringify(Array({ ...this.form.value }));
    const encoded = encodeURI(queries);
    // another way: encoded = JSON.stringify(queries)

    this.service.get(queries).subscribe(res => {
      this.result = res;
    });

    try {
      console.log('Decode', decodeURI(encoded));
    } catch (e) {
      console.error(e);
    }
  }
}
