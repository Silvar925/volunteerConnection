from django.db import models
from UserProfile.models import Speaker, Organizers


class News(models.Model):
    name = models.CharField(max_length=100, verbose_name = "Название новости")
    text = models.TextField(blank=True, null=True, verbose_name = "Описание новости")

    photo = models.ImageField(upload_to='images/news/', verbose_name="Изображение", null=True, blank=True)
    photo2 = models.ImageField(upload_to='images/news/', verbose_name="Изображение для мероприятия", null=True, blank=True)

    date = models.DateField(verbose_name="Дата", null=True, blank=True)
    category = models.CharField(max_length = 20, null=True, blank=True, verbose_name = "Категория")
    numberParticipants = models.IntegerField(null=True, blank=True, verbose_name = "Количество участников")    

    class Meta:
        verbose_name = "Новости"
        verbose_name_plural = "Новости"


class Events(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название мероприятия")
    text = models.TextField(blank=True, null=True, verbose_name="Описание новости")

    photo = models.ImageField(upload_to='images/events/', verbose_name="Изображение для карточки", null=True, blank=True)
    photo2 = models.ImageField(upload_to='images/events/', verbose_name="Изображение для мероприятия", null=True, blank=True)

    category = models.CharField(max_length=20, null=True, blank=True, verbose_name="Категория")
    date = models.DateField(verbose_name="Дата", null=True, blank=True)
    numberParticipants = models.IntegerField(null=True, blank=True, verbose_name="Количество участников")

    address = models.CharField(max_length=100, null=True, blank=True, verbose_name="Адресс")
    programEvent = models.TextField(null=True, blank=True, verbose_name="Программа мероприятия")

    speakers = models.ManyToManyField(Speaker, blank=True, verbose_name="Спикеры")
    organizers = models.ManyToManyField(Organizers, blank=True, verbose_name="Орагнизаторы")

    points = models.IntegerField(null=True, blank=True, verbose_name="Количество очков за мероприятие")

    class Meta:
        verbose_name = "Мероприятия"
        verbose_name_plural = "Мероприятия"


