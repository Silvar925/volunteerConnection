from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')

        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, verbose_name="Имя")
    surname = models.CharField(max_length=50, verbose_name="Фамилия")
    fathername = models.CharField(max_length=50, verbose_name="Очтество")
    email = models.EmailField(verbose_name="Email")
    username = models.CharField(max_length=50, unique=True, verbose_name="Никнейм")
    dateOfBirth = models.DateField(null=True, blank=True)
    education = models.CharField(max_length=100, verbose_name="Образование")
    specialization = models.CharField(max_length=100, verbose_name="Специализация")
    about_me = models.TextField(verbose_name="Обо мне")
    is_staff = models.BooleanField(default=False)
    participatingEvents = models.JSONField(default=dict, blank=True, null=True, verbose_name="Мои мероприятия")

    profile_pic = models.ImageField(upload_to='profile_pics', verbose_name="")
    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"


class Rating(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    countEvents = models.IntegerField(verbose_name = "Количество мероприятий")
    alpha = models.IntegerField(verbose_name = "Альфа")
    omega = models.IntegerField(verbose_name = "Омега")
    points = models.IntegerField(verbose_name = "Баллы")

    class Meta:
        verbose_name = "Рейтинг"
        verbose_name_plural = "Рейтинг"


class Organizers(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True, verbose_name="Биография орагнизатора")
    post = models.CharField(max_length=25, blank=True, null=True, verbose_name="Должность")


    class Meta:
        verbose_name = "Организатор"
        verbose_name_plural = "Организаторы"

    def __str__(self):
        return f"{self.User.name} {self.User.surname}"


class Speaker(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True, verbose_name="Биография спикера")
    post = models.CharField(max_length=25, blank=True, null=True, verbose_name="Должность")

    class Meta:
        verbose_name = "Спикер"
        verbose_name_plural = "Спикеры"

    def __str__(self):
        return f"{self.User.name} {self.User.surname}"