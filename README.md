# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

* DataBase (Table)
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, foreign_key: false|
|mail|string|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
- has_many :groups
- has_many :messages

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: false|

### Association
- has_many :users
- has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: true, foreign_key: false|
|image|string|null: true, foreign_key: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user