
import React from 'react';
class ReadingHelper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShown: false
        };
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        this.setState({ menuShown: !this.state.menuShown });
    }
    render() {
        const readingActionWrapper = (
            <div className={`reading-action-wrapper ${this.state.menuShown ? "" : "hide"}`}>
                <div id={"reading-helper-action"} onClick={this.togglePanel}>
                    {
                        this.state.menuShown ? (
                            <i className={"fas fa-times"} />

                        ) : (
                                <i className={"fas fa-bars"} />
                            )
                    }
                </div>
                <div className={"reading-action-menu"}>
                    <ol>
                        <li>
                            <a href={"#phan1"}>PHẦN 1: LÝ THUYẾT</a>
                            <ol>
                                <li>
                                    <a href={"#phan1.1"}>Dưỡng sinh với bản chất sự sống</a>
                                </li>
                                <li>
                                    <a href={"#phan1.2"}>Cội Nguồn và năng lượng tổng thể</a>
                                </li>
                            </ol>
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
                    </ol>
                </div>
            </div>
        );
        return (
            readingActionWrapper
        )
    }
}
export default ReadingHelper;
