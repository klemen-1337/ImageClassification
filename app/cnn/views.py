from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import *

def home(request):
    return render(request, 'home.html')

from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import *

def home(request):
    return render(request, 'home.html')

def image_view(request):
    form1 = ImageForm(request.POST, request.FILES, counter=1)
    form2 = ImageForm(request.POST, request.FILES, counter=2)

    if request.method == 'POST':
        if form1.is_valid():
            form1.save()
        if form2.is_valid():
            form2.save()

    context = {
        'form1': form1,
        'form2': form2,
    }

    return render(request, 'home.html', context)