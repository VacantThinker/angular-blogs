import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SectionContainerDataService} from '../../../services/section-container-data.service';
import {DataField} from '../../../DataField';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css']
})
export class SectionContainerComponent implements OnInit {

  // md = DataField.markdownIt;
  pageArea = DataField.pageSection;

  section: string;
  mdTitle: string;
  mdContent: string;
  size: string;

  mdArray: Set<string>;
  mdSectionArray: Set<string>;

  constructor(
    private mdDataService: SectionContainerDataService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.mdDataService.getMdArray()
      .subscribe(mdArray => {
        this.mdArray = mdArray;
      });

    this.route.paramMap
      .subscribe(data => {
        if (data.keys.length > 0) {
          this.section = data.get('section');
          this.mdTitle = data.get('mdTitle');
          // console.log('mdtitle=' + this.mdTitle);

          this.mdDataService.getMdSectionArray(this.section)
            .subscribe(mdBeanSection => {
              if (mdBeanSection) {
                this.mdSectionArray = mdBeanSection.mdList;
                this.size = mdBeanSection.size;
              }
            });
          if (this.mdTitle) {
            this.mdDataService.getMdContent(this.section, this.mdTitle)
              .subscribe(text => {
                if (text) {
                  this.mdContent = this.dealHtml(text);
                }
              });
          }

        }

      });
  }

  private dealHtml(c: string): string {
    return DataField.getHtmlWithMarkdown(c, 2);
  }

}
