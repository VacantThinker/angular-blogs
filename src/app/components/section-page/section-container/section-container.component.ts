import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MdArrayDataService} from '../../../services/md-array-data.service';
import {TransferDataService} from '../../../services/transfer-data.service';
import {MdBean} from '../../../beans/md-bean';
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

  mdArray: Set<string>;
  mdSectionArray: Set<MdBean>;

  constructor(
    private mdDataService: MdArrayDataService,
    private transferDataService: TransferDataService,
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
          console.log('mdtitle=' + this.mdTitle);

          this.mdDataService.getMdSectionArray(this.section)
            .subscribe(arr => {
              this.mdSectionArray = arr;
            });

          if (this.mdTitle !== 'null') {
            this.mdDataService.getMdContent(this.section, this.mdTitle)
              .subscribe(text => {
                this.mdContent = this.md.render(text);
                // this.changeDetectorRef.detectChanges();
              });
          }

        }

      });
  }

}
