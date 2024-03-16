import React , {useState} from 'react'
import "./styles/QueryDiv.css";

const QueryDiv = ({details}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleDivClick = () => {
        setIsClicked(!isClicked);
    };
  return (
    <div>
        <div className='quesDiv' onClick={handleDivClick}>
          <p>
            <span className='ques'>{details.text}</span>
            <span className='plus'>{isClicked?"-":"+"}</span>
          </p>
            {isClicked && <div className='ans'>
            <span >{details.extras}</span>
            </div>}
        </div>
    </div>
  )
}

export default QueryDiv