import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-new-angular-app';
  public reservationBool: any;
  public selectList: any;
  public viewModel: any;
  tabNo: any;

  ngOnInit(): void {
    this.tabNo = 0;
    this.selectList = [
      { code: 0, value: '업데이트순' },
      { code: 1, value: '일정순' }
    ]
    this.viewModel = [
      { routin: '[다구간] 인천 - 로스앤젤레스 - 샌프란시스코-인천', date: '2019.12.20 - 2019.12.30' },
      { routin: '[다구간] 인천 - 로스앤젤레스 - 샌프란시스코-인천', date: '2019.12.20 - 2019.12.30' },
      { routin: '[다구간] 인천 - 로스앤젤레스 - 샌프란시스코-인천', date: '2019.12.20 - 2019.12.30' },
    ]
  }

  // 전체선택 클릭
  allCheck(event: any,) {
    this.viewModel.allSelected = event.target.checked;
    this.viewModel.viewList.forEach((element: { selected: any; }) => {
      element.selected = this.viewModel.allSelected;

    });
  }

  onCheck(event: any, index: number) {

    this.viewModel.viewList[index].selected = event.target.checked;

    let all: boolean = false;

    this.viewModel.viewList.map(
      (item: any) => {
        if (!item.selected) {
          all = true;
        }
      }
    );

    this.viewModel.allSelected = !all;

  }
  deleteAll() { }
  goDelete() { }
  goReservation() {

  }
  sortStr(no: number) {
    this.tabNo = no;
    console.log(this.tabNo, 'this.tabNo');

  }
}
