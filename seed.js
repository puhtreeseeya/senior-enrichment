const db = require('./db'); 
const Campus = db.models.campus; 
const User = db.models.user; 

const campuses = [
	{ name: 'Rutgers', image : 'http://www.rutgers.edu/sites/default/files/styles/tile/public/MS14CACFall54v2_tile.jpg?itok=ZVHj6MVA', createdAt: Date.now(), updatedAt: Date.now() },
	{ name: 'Yale', image : 'https://www.yale.edu/sites/default/files/styles/callout_pair_234x132/public/yuag.jpg?itok=0RrS12k0', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'Brown', image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Brown_university_robinson_hall_2009a.JPG/263px-Brown_university_robinson_hall_2009a.JPG', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'MIT', image : 'https://odl.mit.edu/sites/default/files/styles/381_x_272/public/cta-images/MITx%20MicroMasters%20.jpg?itok=U2Zw03BD', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'NYU', image : 'https://www.usnews.com/img/college-photo_6422_256x256mm.jpg', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'Cornell', image : 'https://media.xogrp.com/images/315221c0-9cd8-4963-8336-73c8429c2e9e', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'Columbia', image : 'https://gs.columbia.edu/files/gs/imagecache/frontpage_slider/rsz_aerial-uptown.jpg', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'Princeton', image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Princeton_%286035183309%29.jpg/220px-Princeton_%286035183309%29.jpg', createdAt: Date.now(), updatedAt: Date.now() }, 
	{ name: 'UPenn', image : 'https://timedotcom.files.wordpress.com/2017/06/harvardrichestgrads-em-171224935.jpg?w=720&quality=85', createdAt: Date.now(), updatedAt: Date.now() }, 
]

const users = [
	{ name: 'Alice Chen', email: 'alice@alice.com', campusId: 4, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Mary Yen', email: 'mary@mary.com', campusId: 4, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Nicole Isavonakov', email: 'nicole@nicole.com', campusId: 1, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Bimble Bop', email: 'boppitybop@bohoppity.com', campusId: 2, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Slack', email: 'boppitybop@bohoppity.com', campusId: 2, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Johnny Boy', email: 'jippity@bohoppity.com', campusId: 3, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'SuperKaren', email: 'krzykranen@bohoppity.com', campusId: 5, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'WonderEmily', email: 'blaaaaarg@bohoppity.com', campusId: 3, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Patriciaaaaa', email: 'hhhard@bohoppity.com', campusId: 6, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Gracebop Hopperpants', email: 'boppity@bohoppity.com', campusId: 6, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Billy The Kid', email: 'zeeeelow@bohoppity.com', campusId: 8, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Willi ze wonka', email: 'aow@aol.com', campusId: 9, createdAt: Date.now(), updatedAt: Date.now()}, 
	{ name: 'Apples', email: 'oranges@bohoppity.com', campusId: 7, createdAt: Date.now(), updatedAt: Date.now()}, 
]

const seed = () => {
	var promise1 = campuses.map(campus => { Campus.create(campus) }); 
	var promise2 = users.map(user => { User.create(user) }); 
	Promise.all([promise1, promise2]); 
}

const main = () => { 
	console.log('Syncing db...'); 
	db.sync({ force : true })
		.then(() => {
			console.log('Seeding database...'); 
			return seed(); 
		}).catch(err => {
			console.log('Error while seeding'); 
			console.log(err.stack); 
		}).then(() => {		
			return null; 
		}); 
}

main(); 

