from django.contrib import admin
from .models import Organizers, Speaker, User

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
