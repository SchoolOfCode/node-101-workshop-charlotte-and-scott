import myCollection from "./collection.js";
import chalk from 'chalk';

function describeCollection () {
	myCollection.forEach(function(item){
		if (item.count > 1){
		console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)} Here's what I like about them: ${chalk.green.bold(item.whatILike)}`);
	} else {
		console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)} Here's what I like about them: ${chalk.green.bold(item.whatILike)}`);
	}
	});
  };

  describeCollection(myCollection);