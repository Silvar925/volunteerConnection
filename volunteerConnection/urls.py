from django.contrib import admin
from django.urls import path, include

from VNCore.urls import urlpatternsVNCore
from UserProfile.urls import urlpatternsPersonalProfile

from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(urlpatternsVNCore)),
    path('', include(urlpatternsPersonalProfile))
]

if settings.DEBUG:
    urlpatternsVNCore += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)