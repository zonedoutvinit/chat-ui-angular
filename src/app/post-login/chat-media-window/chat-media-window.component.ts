import { Component, Input, OnInit } from '@angular/core';
import {
  availableLinks,
  mediaStaticFiles,
  sampleMediaDetail,
} from 'src/utils/static-data';
import { HttpClient } from '@angular/common/http';
import * as cheerio from 'cheerio';

@Component({
  selector: 'app-chat-media-window',
  templateUrl: './chat-media-window.component.html',
  styleUrls: ['./chat-media-window.component.css'],
})
export class ChatMediaWindowComponent implements OnInit {
  @Input() onClose!: (args: any) => void;
  selectedtab = 'Media';
  tabs = ['Media', 'Links', 'Docs'];
  links: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMetaTags();
  }

  chatDetailAssets = sampleMediaDetail;
  closeCard = () => this.onClose && this.onClose(false);
  tabSwitch = (newSelectedtab: string) => (this.selectedtab = newSelectedtab);
  staticMedia = mediaStaticFiles;

  fetchMetaTags() {
    availableLinks.map((item: any) => {
      this.http.get(item.link, { responseType: 'text' }).subscribe(
        (htmlContent: string) => {
          // Parse HTML content to extract meta tags
          const $ = cheerio.load(htmlContent);
          const metaTags = $('meta'); // Get all meta tags

          // Loop through meta tags and extract specific attributes
          metaTags.each((index, element) => {
            const tagName = $(element).attr('name'); // Get the 'name' attribute of meta tag
            const tagContent = $(element).attr('content'); // Get the 'content' attribute of meta tag
            if (tagName == 'title') {
              item.title = tagContent;
            } else if (tagName == 'description') {
              item.description = tagContent;
            } else if (tagName == 'twitter:image') {
              item.image = tagContent;
            }
            // console.log(`Tag Name: ${tagName}, Content: ${tagContent}`);
            // Log or manipulate the meta tag attributes as needed
          });
        },
        (error) => {
          console.error('Error fetching URL:', error);
        }
      );
    });

		console.log("func/var: ChatMediaWindowComponent -> fetchMetaTags -> availableLinks", availableLinks)
    this.links = availableLinks;
  }
}
