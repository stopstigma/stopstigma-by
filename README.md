## Установка для разработки
1. нужны инструменты:
   - composer, nodejs + yarn;
   - php, mysql, apache - в виде докера или любого другого сетапа;
1. склонировать проект
1. запустить в папке проекта команды
   - `composer install`
1. переименовать файл `.env.example` в `.env`
1. заполнить файл `.env`

## Установка для продакшена (автоматическая)
1. склонировать проект
1. запустить в папке проекта команды
    - `composer install --optimize-autoloader --no-dev`
1. переименовать файл `.env.example` в `.env`
1. заполнить файл `.env` из "секретов"

## Demo server

http://ecsc00a09cbe.epam.com/wp-admin/
admin
Fz37CT@^@VENu1x63#

## Snippets

```
# upload file to server
/var/www/dev
```

### sass to scss converter 

https://sass-scss-converter.netlify.app/