# Generated by Django 5.0.1 on 2024-01-24 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserProfile', '0002_user_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='dateOfBirth',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата рождения'),
        ),
    ]
