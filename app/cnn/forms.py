
# forms.py
from django import forms
from .models import *
 
 
class ImageForm(forms.ModelForm):
    
    def __init__(self, *args, **kwargs):
        counter = kwargs.pop('counter', 1)
        super().__init__(*args, **kwargs)
        self.fields['img'].widget.attrs.update({
            'id': f'image-field-{counter}'
        })

    class Meta:
        model = Image
        fields = ['img']
        required = {
            'img': False,
        }