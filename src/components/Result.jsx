import React, { useState } from 'react';

const Result = ({ data, data2, score }) => {
	const [show, setShow] = useState(false);
	return (
		<div style={{margin:"30px" ,border:"1px solid green"}}>
			<div>
				<center>
					<h2>RESULT</h2>
					<h3>
						Your Score is {score} out of {data.length}
					</h3>
					<h3>{(score * 100) / data.length}%</h3>
					<p>
						{score == data.length
							? 'Excellent'
							: score == data.length - 1
							? 'Almost got it Full Marks'
							: score < data.length - 2
							? 'Work Hard'
							: null}
					</p>
					<button
						className="next"
						onClick={() => setShow(!show)}
					>
						{!show ? 'Check Your Answer' : 'Show less'}
					</button>
					<hr />

					{show && (
						<div>
							{data.map((main, j) => {
								return (
									<div key={main.numb}>
										<h2>
											Q<span>{main.numb}.) </span>
											{main.question}
										</h2>
										<div key={main.numb * 2}>
											{main.options.map((op, i) => {
												if (
													op.id == data2[j].id &&
													data[j].answer == op.opt
												) {
													return (
														<div key={op.opt} style={{marginBottom:"10px"}}>
															<button
																style={{
																	color: 'white',
																	fontWeight:
																		'bolder',
																	backgroundColor:
																		'green',
																	width: '40%',
																	padding:
																		'10px 20px',
																	borderRadius:
																		'10px',
																}}
															>
																✔{op.opt}
																<span
																	style={{
																		marginLeft:
																			'10px',
																	}}
																>
																	your Answer
																	is rights{' '}
																</span>
															</button>
														</div>
													);
												}
												if (op.id == data2[j].id) {
													return (
														<div key={op.id} style={{marginBottom:"10px"}}>
															<button
																style={{
																	color: 'white',
																	fontWeight:
																		'bolder',
																	backgroundColor:
																		'red',
																	width: '40%',
																	padding:
																		'10px 20px',
																	borderRadius:
																		'10px',
																}}
															>
																❌ {op.opt}
																<span
																	style={{
																		marginLeft:
																			'10px',
																	}}
																>
																	your answer{' '}
																</span>
															</button>
														</div>
													);
												} else if (
													data[j].answer == op.opt
												) {
													return (
														<div key={op.opt} style={{marginBottom:"10px"}}>
															<button
																style={{
																	color: 'white',
																	fontWeight:
																		'bolder',
																	width: '40%',
																	backgroundColor:
																		'blue',
																	padding:
																		'10px 20px',
																	borderRadius:
																		'10px',
																}}
															>
																{op.opt}
																<span
																	style={{
																		marginLeft:
																			'10px',
																	}}
																>
																	currect
																	answer{' '}
																</span>
															</button>
														</div>
													);
												}

												return (
													<div key={op.id} style={{marginBottom:"10px"}}>
														<p> {op.opt}</p>
													</div>
												);
											})}
										</div>
										<hr />
									</div>
								);
							})}
						</div>
					)}
				</center>
			</div>
		</div>
	);
};

export default Result;
