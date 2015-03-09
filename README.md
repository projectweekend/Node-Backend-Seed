A nice starting point for a restful JSON API that includes:
* No static file serving or server side templating. This project is all about the data.
* The latest [Express.js](http://expressjs.com/) web application framework (v4.x)
* Token based authentication using [express-jwt](https://www.npmjs.org/package/express-jwt) middleware
* [Mongodb](http://www.mongodb.org/) and [Mongoose ODM](http://mongoosejs.com/)
* Portable and isolated development environment using [Vagrant](http://www.vagrantup.com/), [Docker](https://www.docker.io/), and [Docker Compose](https://docs.docker.com/compose/)


### Getting Started

Before getting started, make sure you have [Vagrant installed](http://www.vagrantup.com/downloads.html).

* Clone this repo: `git clone https://github.com/projectweekend/Node-Backend-Seed.git New-Name`
* Change directory: `cd New-Name`
* Launch the Vagrant VM: `vagrant up`
* SSH into the VM: `vagrant ssh`
* Change directory into the project root: `cd /vagrant`
* Launch the API app and database containers: `docker-compose up`

#### Getting Started Notes

* The first time you issue the `vagrant up` commmand the base box for the VM will be downloaded and provisioned automatically according to the project's `Vagrantfile`. This may take a little while to complete depending on the speed of your network connection. Subsequent launches using `vagrant up` will run much faster. For more information about other Vagrant commands, [check out the documentation](http://docs.vagrantup.com/v2/cli/index.html).
* The first time you issue the `docker-compose up` command the base NodeJS and MongoDB containers will be downloaded from the Docker Registry, according to the project's `docker-compose.yml` and `Dockerfile`. This may take a little while to complete depending on the speed of your network connection. Subsequent launches using `docker-compose up` will run much faster. For more information about Docker Compose, [check out the documentation](https://docs.docker.com/compose/).

### Project Organization Notes

* Use the `/routes/index.js` file for mapping route handler functions to URLs. This helps keep `app.js` from getting cluttered.
* Route handlers, and all the supporting items they require, are defined in `/api`.
* Mongoose models related to each handler module are managed in `/api/module_name/models.js`
* Simple *authentication* and *signup* routes are already active in the seed application. These exist as part of the `/api/user` module.
