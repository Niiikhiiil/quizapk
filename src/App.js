import React, { useState } from 'react';
import { questions } from './components/quizData';
import Result from './components/Result';
import './App.css';

const App = () => {
	const [data, setData] = useState(questions);
	const [data2, setData2] = useState([]);
	const [count, setCount] = useState(0);
	const [score, setScore] = useState(0);
	const [show, setShow] = useState(false);

	const handleClick = (e, id, qid) => {
		e.preventDefault();
		let option = e.target.value;

		if (qid) {
			let fil = data2.filter((data) => data.qid !== qid);
			setData2([...fil, { id: id, qid: qid, option: option }]);
		}
	};

	const handleNext = () => {
		if (count == data.length - 1) {
			setShow(true);
		}
		if (count < data.length) {
			if (data2[count].option == data[count].answer) {
				setScore(score + 1);
				setCount(count + 1);
			} else {
				setCount(count + 1);
			}
		} else {
			//
		}
	};

	return (
		<div>
			<center>
				{!show ? (
					<div>
						<h3>
							<p>
								{data[count].numb} .) {data[count].question}
							</p>
						</h3>
						<div>
							{data[count].options.map((o, i) => {
								return (
									<div key={o.id}>
										<button
											type="button"
											value={o.opt}
											className="optionButton"
											onClick={(e) =>
												handleClick(
													e,
													o.id,
													data[count].numb,
												)
											}
										>
											{o.opt}
										</button>
									</div>
								);
							})}
						</div>
						<hr />
						<button
							className="next"
							onClick={() => handleNext()}
						>
							{count == data.length - 1 ? 'Done' : 'Next'}
						</button>
					</div>
				) : (
					<Result
						data={data}
						data2={data2}
						score={score}
					/>
				)}
			</center>
		</div>
	);
};

export default App;
