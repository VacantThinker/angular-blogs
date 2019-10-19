import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SectionContainerDataService} from '../../../services/section-container-data.service';
import {DataField} from '../../../DataField';
import {MdSection} from '../../../beans/md-section';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css']
})
export class SectionContainerComponent implements OnInit {

  pageArea = DataField.pageSection;

  section: string;
  mdTitle: string;
  mdHtml: string;

  mdSectionSet: Set<string>;
  mdBeanSet: Set<MdSection>;

  constructor(
    private sectionContainerDataService: SectionContainerDataService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.sectionContainerDataService.getMdBeanSet()
      .subscribe(list => {
        if (list) {
          this.mdBeanSet = list;
        }
      });

    this.route.paramMap
      .subscribe(data => {
        if (data.keys.length > 0) {
          this.section = data.get('section');
          this.mdTitle = data.get('mdTitle');
          // console.log('mdtitle=' + this.mdTitle);

          this.sectionContainerDataService.getMdSectionSet(this.section)
            .subscribe(list => {
              if (list) {
                this.mdSectionSet = list;
              }
            });
          if (this.mdTitle) {
            this.sectionContainerDataService.getMdContent(this.section, this.mdTitle)
              .subscribe(text => {
                if (text) {
                  this.mdHtml = this.dealHtml(text);
                }
              });
          }

        }

      });
  }

  private dealHtml(c: string): string {
    return DataField.getHtmlWithMarkdown(c, 1);
  }

}
