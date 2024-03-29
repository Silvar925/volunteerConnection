# Generated by Django 5.0.1 on 2024-01-24 12:26

import django.db.models.deletion
import django.db.models.manager
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, verbose_name='Имя')),
                ('surname', models.CharField(max_length=50, verbose_name='Фамилия')),
                ('fathername', models.CharField(max_length=50, verbose_name='Очтество')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('username', models.CharField(max_length=50, unique=True, verbose_name='Никнейм')),
                ('dateOfBirth', models.DateField(verbose_name='Дата рождения')),
                ('education', models.CharField(max_length=100, verbose_name='Образование')),
                ('specialization', models.CharField(max_length=100, verbose_name='Специализация')),
                ('about_me', models.TextField(verbose_name='Обо мне')),
                ('profile_pic', models.ImageField(upload_to='profile_pics', verbose_name='')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('object', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Speaker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.TextField(blank=True, null=True, verbose_name='Биография спикера')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='images/speakers/', verbose_name='Изображение спикера')),
                ('post', models.CharField(blank=True, max_length=25, null=True, verbose_name='Должность')),
                ('User', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Спикер',
                'verbose_name_plural': 'Спикеры',
            },
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('countEvents', models.IntegerField(verbose_name='Количество мероприятий')),
                ('alpha', models.IntegerField(verbose_name='Альфа')),
                ('omega', models.IntegerField(verbose_name='Омега')),
                ('points', models.IntegerField(verbose_name='Баллы')),
                ('User', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Рейтинг',
                'verbose_name_plural': 'Рейтинг',
            },
        ),
        migrations.CreateModel(
            name='Organizers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.TextField(blank=True, null=True, verbose_name='Биография орагнизатора')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='images/speakers/', verbose_name='Изображение спикера')),
                ('post', models.CharField(blank=True, max_length=25, null=True, verbose_name='Должность')),
                ('User', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Организатор',
                'verbose_name_plural': 'Организаторы',
            },
        ),
    ]
