# Generated by Django 4.2.2 on 2023-07-05 09:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0003_myuser_groups_myuser_is_superuser_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="myuser",
            name="is_admin",
        ),
        migrations.RemoveField(
            model_name="myuser",
            name="is_staff",
        ),
    ]
