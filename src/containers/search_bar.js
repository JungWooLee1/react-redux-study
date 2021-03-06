import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // term : 검색
    this.state = { term: '' };

    // 검색바의 인스턴스가 onInputChange 함수를 가지고 이 함수를 검색바와 바인딩합니다.
    // 이는 onInputChange를 대체합니다.
    // 즉 기존 함수를 가지고 바인딩하여, 기존에 있는 함수를 대체하는 구문입니다.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // 모든 DOM 이벤트 핸들러인 onChange나 onClick, onHover, onScroll 과 같은 것들은 event 오브젝트가 따라온다.
  // ( 바닐라 자바스크립트 )
  // 텍스트를 입력할 때 스테이트 세팅

  onInputChange(event) {
    this.setState({term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          style={{width: '500px'}}
          placeholder="당신이 관심있는 도시의 5일동안의 기상정보"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// 호출될 때마다 dispatch와 함께 액션이 반환된다.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// mapDispatchToProps가 2번째 요소로 들어갈 때 null 반환
// 리덕스가 스테이트를 유지하고 있으니 컨테이너가 신경쓸 필요가 없다는
export default connect(null, mapDispatchToProps)(SearchBar) ;