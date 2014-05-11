A good starting point for a restful JSON API that includes:
* The latest [Express.js](http://expressjs.com/) web application framework (v4.x)
* Token based authentication using [express-jwt](https://www.npmjs.org/package/express-jwt) middleware
* [Mongodb](http://www.mongodb.org/) and [Mongoose ODM](http://mongoosejs.com/)
* Portable and isolated development environment using [Vagrant](http://www.vagrantup.com/), [Docker](https://www.docker.io/), and [Fig](http://orchardup.github.io/fig/)


### Getting Started

Before getting started, make sure you have [Vagrant installed](http://www.vagrantup.com/downloads.html).

* Clone this repo: `git clone https://github.com/projectweekend/Node-Backend-Seed.git Your-Directory-Name-Here`
* Change directory: `cd Your-Directory-Name-Here`
* Launch the Vagrant VM: `vagrant up`
* SSH into the VM: `vagrant ssh`
* Change directory into the project root: `cd /vagrant`
* Launch the API app and database containers: `fig up`

#### Getting Started Notes

*The first time you issue the `vagrant up` commmand the base box for the VM will be downloaded and provisioned automatically according to the project's `Vagrantfile`. This may take a little while to complete depending on the speed of your network connection. Subsequent launches using `vagrant up` will run much faster. For more information about other Vagrant commands, [check out the documentation](http://docs.vagrantup.com/v2/cli/index.html).
* The first time you issue the `fig up` command the base NodeJS and MongoDB containers will be downloaded from the Docker Registry, according to the project's `fig.yml` and `Dockerfile`. This may take a little while to complete depending on the speed of your network connection. Subsequent launches using `fig up` will run much faster. For more information about Fig, [check out the documentation](http://orchardup.github.io/fig/).




