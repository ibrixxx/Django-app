# Generated by Django 3.2.3 on 2021-06-13 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_classes_homework_records'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='type',
            field=models.CharField(default='Assistant', max_length=20),
        ),
    ]
