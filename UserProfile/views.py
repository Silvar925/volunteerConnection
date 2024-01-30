from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from .models import User, Rating
from rest_framework import generics
from .serializer import UserSerializer, RatingSerializer

def personalProfile(request):
    return render(request, 'personalProfile/profile.html')


def authentication(request):
    return render(request, 'personalProfile/authentication.html')


def user_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)

        retUser = User.objects.filter(email=email)

        if retUser.exists():
            user = retUser.first()
            surname = user.surname
            name = user.name
            username = user.username
            user_id = user.id

            request.session['fullname'] = {'surname': surname, 'name': name, 'id': user_id, "username": username}

        if user is not None:
            if user.is_active:
                auth_login(request, user)
                return redirect('personalProfile')
            else:
                return render(request, 'personalProfile/authentication.html',
                              {'error_message': 'Учетная запись отключена'})
        else:
            return render(request, 'personalProfile/authentication.html',
                          {'error_message': 'Неверный логин или пароль'})

    return render(request, 'personalProfile/authentication.html')


def register(request):
    if request.method == 'POST':
        surname = request.POST.get('surname')
        name = request.POST.get('name')
        fathername = request.POST.get('fathername')
        email = request.POST.get('email')
        education = request.POST.get('education')
        specialization = request.POST.get('specialization')
        password = request.POST.get('password')
        username = request.POST.get('username')

        user = User.objects.create_user(
            name=name,
            surname=surname,
            fathername=fathername,
            username=username,
            email=email,
            education=education,
            specialization=specialization,
            password=password
        )

        return redirect('personalProfile')

    return render(request, 'UserProfile/profile.html')


def user_logout(request):
    logout(request)
    return redirect('/')


def personalAccount(request):
    fullname = request.session.get('fullname', {})

    if request.user.is_authenticated:
        return render(request, 'proile.html', {'fullname': fullname})
    else:
        return render(request, 'authorization.html', {'error_message': 'Пожалуйста, войдите в систему для доступа к личному кабинету.'})


class UsersAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RatingAPIView(generics.ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer