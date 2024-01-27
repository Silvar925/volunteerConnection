from django.urls import path
from . import views


urlpatternsVNCore = [
    path('', views.newsPage, name='news'),
    path('events', views.eventsPage, name='events'),
    path('rating', views.ratingPage, name='rating'),

    path('api/listNews', views.NewsAPIView.as_view(), name='listNews'),
    path('api/listEvents', views.EventsAPIViews.as_view(), name='listEvents'),
    path('api/listSpeakers', views.SpeakerAPIViews.as_view(), name='listSpeakers'),
    path('api/listOrganizers', views.OrganizersAPIViews.as_view(), name='listOrganizers')
]

