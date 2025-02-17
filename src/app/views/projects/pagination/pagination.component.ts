import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() projects_count: number = 0;
  @Input() page: number = 0;
  @Input() page_size: number = 10;
  @Input() max_page: number = Math.ceil(this.projects_count / this.page_size);
  @Input() range: { start: number; end: number } = { start: 1, end: this.page_size };

  @Output() onChange = new EventEmitter<{ page: number; page_size: number; max_page: number; range: { start: number; end: number } }>();

  goToPage(page: number) {
    if (page < 0 || page >= this.max_page) return;

    this.page = page;
    this.range.start = this.projects_count == 0 ? 0 : this.page * this.page_size + 1;
    this.range.end = Math.min((this.page + 1) * this.page_size, this.projects_count);

    this.onChange.emit({ page: this.page, page_size: this.page_size, max_page: this.max_page, range: this.range });
  }

  onPageSizeChange(size: number) {
    this.page = 0;
    this.page_size = size;
    this.max_page = Math.ceil(this.projects_count / this.page_size);
    this.range.start = this.projects_count == 0 ? 0 : this.page * this.page_size + 1;
    this.range.end = Math.min((this.page + 1) * this.page_size, this.projects_count);

    this.onChange.emit({ page: this.page, page_size: this.page_size, max_page: this.max_page, range: this.range });
  }
}
