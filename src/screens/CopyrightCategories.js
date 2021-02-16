import React from 'react';

function CopyrightCategories() {
	return (
		<div className='container p-0 copyright_page' id='copyright_page'>
			<div class='row img_container m-0'>
				<div class='col-lg-8 pr-5' id='virtual_art'>
					<h1>
						Visual Art <span>Work (VA)</span>
					</h1>
					<p>
						This category includes two-dimensional and three-dimensional works of authorship of fine
						art, graphic art, and applied art. This includes photographs; prints and art
						reproductions, maps; technical drawings; and architectural* drawings and plans. If you
						have taken any photograph that is worthy of protection, the VA registration process will
						protect your work of authorship against unauthorized use or copying by others. Protect
						your Facebook and other social media photos and pages against piracy.
					</p>
				</div>
				<div class='col-lg-4  bg-pic' style={{ backgroundImage: `url(/images/va/VA1.jpg)` }}></div>
			</div>

			<div class='row img_container m-0'>
				<div class='col-lg-4  bg-pic' style={{ backgroundImage: `url(/images/tx/TX1.jpg)` }}></div>
				<div class='col-lg-8 pl-5' id='literary_work'>
					<h1>
						Literary <span>Works (TX)</span>
					</h1>
					<p>
						This category protects books, movie scrips and other literary compositions. A literary
						work may be registered at any stage of development, and we recommend that your work is
						registered prior to submission to third parties or any online publication if at all
						possible.
					</p>
				</div>
			</div>

			<div class='row img_container m-0'>
				<div class='col-lg-8 pr-5' id='sound_recording'>
					<h1>
						Sound <span>Recordings (SR)</span>
					</h1>
					<p>
						Sound recordings are defined in the law as “works that result from the fixation of a
						series of musical, spoken, or other sounds. Whether you have recorded a song or a set of
						noises, if you want to protect against others’ use or copying, you can do so here.
					</p>
				</div>
				<div class='col-lg-4  bg-pic' style={{ backgroundImage: `url(/images/SR/SR1.jpg)` }}></div>
			</div>

			<div class='row img_container m-0'>
				<div class='col-lg-4  bg-pic' style={{ backgroundImage: `url(/images/PA/PA1.jpg)` }}></div>
				<div class='col-lg-8 pl-5' id='performing_art'>
					<h1>
						Performing <span>Arts (PA)</span>
					</h1>
					<p>
						Choreography is the composition and arrangement of dance movements and patterns usually
						intended to be accompanied by music. As distinct from choreography, pantomime is the art
						of imitating or acting out situations, characters, or other events These categories of
						performing arts provide protection for a range of performing arts creativity.
					</p>
				</div>
			</div>

			<div class='row img_container m-0'>
				<div class='col-lg-8 pr-5' id='single_serial'>
					<h1>
						Single <span>Serials (SE)</span>
					</h1>

					<p>
						A serial is defined as a work issued or intended to be issued in successive parts
						bearing numerical or chronological designations and intended to be continued
						indefinitely. This class includes a variety of works, such as periodicals; newspapers;
						annuals; and the journals, proceedings, and transactions of societies. Do not use Form
						SE to register an individual contribution to a serial
					</p>
				</div>
				<div class='col-lg-4 bg-pic' style={{ backgroundImage: `url(/images/SE/SE1.jpg)` }}></div>
			</div>
		</div>
	);
}

export default CopyrightCategories;
