# Generated by Django 5.0.1 on 2024-01-25 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VNCore', '0002_alter_news_date_alter_news_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='date',
            field=models.DateField(blank=True, null=True, verbose_name='Дата'),
        ),
    ]
