import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ImagePipe } from './pipe/image.pipe';

@NgModule({
  declarations: [MenuComponent, ImagePipe],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, ImagePipe],
})
export class SharedModule {}
