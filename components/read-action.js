import Head from "next/head";

const ReadingHelper = () => (
  <div className={'reading-action-wrapper hide'}>
    <Head>
      <script src={"static/js/reading-helper.js"} />
    </Head>
    <div id={"reading-helper-action"}>
      <i className={"fas fa-bars icon-show"} />
      <i className={"fas fa-times icon-hide"} />
    </div>
    <div className={"reading-action-menu"}>
      <ul>
        <li>
          <a href={"#phan1"}>PHẦN 1: LÝ THUYẾT</a>
        </li>
        <li>
          <a href={"#phan2"}>PHẦN 2: THỰC NGHIỆM</a>
        </li>
        <li>
          <a href={"#phan3"}>PHẦN 3: KẾT LUẬN</a>
        </li>
        <li>
          <a href={"#phan4"}>PHẦN 4: BỔ SUNG</a>
        </li>
      </ul>
    </div>
  </div>
);
export default ReadingHelper;
