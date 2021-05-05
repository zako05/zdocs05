# BoxDice Development

## Sprint / Process

* we had 2 weeks sprint (Kanban).
* we had daily standups where everyone had to describe what he was doing & what he is going to do today
* we had 'master', 'development', 'feature' `feature/create-user` & 'bug' `bug/user-creation-fail` git branch/es
* each feature or bug had own git branch
  * feature/story: within the sprint we used to have a discussion about the new feature (usually it was part of bigger feature planed by CEO, analysts or product owner) with analyst & developer
    * put to gather all necessary information about the feature / story to our Wiki: How-To (written by testers mostly for testers)
    * discussion included talk about the 'acceptance criteria' (AC)
    * test case/s preparation (had to cover all AC)
    * feature was tested by tester whether all AC are covered
    * next was identified edge cases and also covered by TC
  * bug: within the sprint I tested also fixed bugs based on the priority
    * for each fixed bug I wrote TC if didn't exist
* I was developing & updating our test automation suits (Ruby + Selenium + Rspec + Capybara)
  * I was covering test cases of existing basic functionality
  * I was trying add 1 - 2 test cases also for uncovered new features, but because lack of time it wasn't always possible
* at the end of the sprint (basically 3 days before end) I had to prepare test plan & test environment for regression testing
  * put together all TCs that covers all the areas affected by the changes
    * split the TCs between all testers (at the time 4 testers) 
  * prepare Staging environment:
    * prepare DB (often export & import an existing 'client' DB)
    * run sanitization
    * deploy new changes to Staging environment - development branch that contained all the changes
  * run already automated tests against Staging environment (not included in CI pipeline at the time)
* at last day assist during UAT run by product owner
* after sprint ends, assist during BETA testing run by clients whose got the new changes as first

## Testing

* Environments
  * dev environment
  * staging (close to production)
  * production
* 5 testers
  * 3 Philippines (Jenny, Rolando, Yo (left early))
  * 2 Slovak (Surka, ...)
  * 1 Test Lead
* Sanitization - run each time when building up an environment
  * script performs several SQL queries that ensure no production data appears in DB
* Exploratory testing
* Regression testing (3 days)
* BAT (business acceptance testing) - after Regression testing
* BETA testing
* Automation: 
  * Selenium WebDriver + Ruby + Rspec + Capybara
  * Appium - mobile app automation (in stage of trying)

## Development

### Environment

* development - running locally, each developer / tester has own one
* staging - close to production - running on AWS servers
 * Main app
 * Hub
* production
* Mobile App (iOS - React Native) linked to Hub (where all data are centralized at the one place)

### Server

* Proxy (Nginx)
* Apps
  * Ruby On Rails
  * PHP
* MariaDB
* Assets
* Hub Web
  * PostgreSQL
  * Docker

### Technologies

* Linux Debian
* Git & GitHub
* AWS
* Nginx
* Elastic Search
* Docker
* Octopus Deploy ?
* Redis - data structure store, used as a database, cache & message broker
  * used on RoR side
  * support only transient (prechodne) messages 
  * devs prefer for real-time apps
* Memcached
  * used on PHP side
  * key-value store
    * it is very rarely that redis is  your primary database
    * it will almost always be a supplementary tool to another database
  * I like to think of a key-value store as a giant JavaScript object e.g. `store['my-key'] = 5` and later `store['key']`
  * Key-value stores are commonly used as caches
  * usage: run expensive query once a day (due to its rarely update) and then store the result in Redis
    * then app won't run the query against PostgreSQL, but first read from the key-value store
* RabbitMQ - message broker
  * support both persistent & transient messages
  * devs prefer for re-process in case of failure
  * good handles large messages 
  * it guarantees delivery of messages

### Other

* Linux: Debian - Cron jobs
* rails-sidekiq
  * efficient background processing for Ruby
  * it uses threads to handle many jobs at the same time in the same process

**links:**

* https://www.digitalocean.com/community/tutorials/how-to-add-sidekiq-and-redis-to-a-ruby-on-rails-application
* https://github.com/mperham/sidekiq
* https://www.imaginarycloud.com/blog/redis-vs-memcached/
* https://redis.io/topics/introduction
* https://btholt.github.io/complete-intro-to-databases/key-value-store
* https://btholt.github.io/complete-intro-to-databases/redis
* https://www.rabbitmq.com/
* https://www.educba.com/rabbitmq-vs-redis/
* https://octopus.com/
