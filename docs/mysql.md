# mysql 
Mac相对来讲并不是说不方便, 可能更多的是不熟悉, 毕竟Mac主要是通过dmg安装的. 一般情况我们可能会在设置里面去启动或停止MySQL, 但有些时候我们有需要命令去启动.
```shell
sudo /usr/local/mysql/support-files/mysql.server start
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server restart
```

如果期间出现错误, 更多的是权限问题, 把 /usr/local/mysql/data 设置为读写

```shell
sudo chmod -R 777 /usr/local/mysql/data
```

如果忘记了密码
1.关闭mysql, 可强制关闭进程
```shell
sudo pkill -9 mysql
```
2.本地启动

```shell
sudo /usr/local/mysql/support-files/mysql.server start --skip-grant-tables
```

3.修改mysql.user表里面的password字段

```shell
> update mysql.user set password='' where host='localhost';
> flush privileges;
```

4.退出重启, 即可在本地免密登录, 之后按自己需求设置相应的用户密码


## sql

```sql
create  database enlishWords

CREATE TABLE `enlishWords`.`words` (
  `id` INT NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `title` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
```
