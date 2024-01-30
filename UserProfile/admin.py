from django.contrib import admin
from .models import Organizers, Speaker, User, Rating

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'fathername')
    search_fields = ['name', 'surname', 'fathername', 'mothername', 'email', 'username', 'education', 'specialization']

@admin.register(Organizers)
class NewOrganizersAdmin(admin.ModelAdmin):
    list_display = ('User', 'bio', 'post')
    search_fields = ['User', 'bio', 'post']


@admin.register(Speaker)
class SpeakerAdmin(admin.ModelAdmin):
    list_display = ('User', 'bio', 'post')
    search_fields = ['User', 'bio', 'post']

@admin.register(Rating)
class NewRatingAdmin(admin.ModelAdmin):
    list_display = ('User', 'countEvents', 'alpha', 'omega', 'points')
    search_fields = ['User', 'countEvents', 'alpha', 'omega', 'points']