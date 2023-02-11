import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Folder, Github, Linkedin, Instagram, Facebook, Send, ExternalLink } from 'angular-feather/icons';

const icons = {
  Github,
  Folder,
  ExternalLink,
  Linkedin,
  Instagram,
  Facebook,
  Send,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
