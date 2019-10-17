import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MdArrayDataService} from '../../../services/md-array-data.service';
import {DataField} from '../../../DataField';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css']
})
export class SectionContainerComponent implements OnInit {

  md = DataField.md;

  section: string;
  mdTitle: string;
  mdContent: string;
  size: number;

  mdArray: Set<string>;
  mdSectionArray: Set<string>;

  constructor(
    private mdDataService: MdArrayDataService,
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
                  this.mdContent = this.md.render(text);
                }
              });
          }

        }

      });
  }

}
